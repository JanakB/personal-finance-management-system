from collections import Counter

import numpy as np
import pandas as pd

from decision_tree import DecisionTree


def bootstrap_sample(X, y):
    n_samples = X.shape[0]
    idxs = np.random.choice(n_samples, n_samples, replace=True)
    return X[idxs], y[idxs]


def most_common_label(y):
    counter = Counter(y)
    most_common = counter.most_common(1)[0][0]
    return most_common


class RandomForest:
    def __init__(self, n_trees=10, min_samples_split=2, max_depth=100, n_feats=None):
        self.n_trees = n_trees
        self.min_samples_split = min_samples_split
        self.max_depth = max_depth
        self.n_feats = n_feats
        self.trees = []

    def fit(self, X, y):
        self.trees = []
        for _ in range(self.n_trees):
            tree = DecisionTree(
                min_samples_split=self.min_samples_split,
                max_depth=self.max_depth,
                n_feats=self.n_feats,
            )
            X_samp, y_samp = bootstrap_sample(X, y)
            tree.fit(X_samp, y_samp)
            self.trees.append(tree)

    def predict(self, X):
        tree_preds = np.array([tree.predict(X) for tree in self.trees])
        tree_preds = np.swapaxes(tree_preds, 0, 1)
        y_pred = [most_common_label(tree_pred) for tree_pred in tree_preds]
        return np.array(y_pred)

    def accuracy(y_true, y_pred):
        accuracy = np.sum(y_true == y_pred) / len(y_true)
        return accuracy


# Testing
if __name__ == "__main__":
    # Imports
    from sklearn import datasets
    from sklearn.model_selection import train_test_split

    def accuracy(y_true, y_pred):
        accuracy = np.sum(y_true == y_pred) / len(y_true)
        return accuracy

    df = pd.read_csv("income.csv")
    


    # hot-encoding categorical features i.e. binary
    df = pd.concat([df.drop('occupation', axis=1), pd.get_dummies(df.occupation, dtype='int').add_prefix('occupation_')], axis=1)
    df = pd.concat([df.drop('workclass', axis=1), pd.get_dummies(df.workclass, dtype='int').add_prefix('workclass_')], axis=1)
    df = pd.concat([df.drop('marital-status', axis=1), pd.get_dummies(df['marital-status'], dtype='int').add_prefix('marital-status_')], axis=1)
    df = pd.concat([df.drop('relationship', axis=1), pd.get_dummies(df.relationship, dtype='int').add_prefix('relationship_')], axis=1)
    df = pd.concat([df.drop('race', axis=1), pd.get_dummies(df.race, dtype='int').add_prefix('race_')], axis=1)
    df = pd.concat([df.drop('native-country', axis=1), pd.get_dummies(df['native-country'], dtype='int').add_prefix('native-country_')], axis=1)

    df = df.drop('education', axis=1) # because we already have educational-num

    # replacing ? with NaN
    df.replace('?', np.NaN,inplace = True)

    # replacing NaN with Forward Fill
    df.fillna(method = 'ffill', inplace = True)

    # gender binary feature
    df['gender'] = df['gender'].apply(lambda x: 1 if x == 'Male' else 0)
    df['income'] = df['income'].apply(lambda x: 1 if x == '>50K' else 0)

    df = df.drop('fnlwgt', axis=1)

    train_df, test_df = train_test_split(df, test_size=0.2, random_state=1234)

    train_X = train_df.drop('income', axis=1).to_numpy()
    train_Y = train_df['income'].to_numpy()

    test_X = test_df.drop('income', axis=1).to_numpy()
    test_Y = test_df['income'].to_numpy()

    clf = RandomForest(n_trees=3, max_depth=10)

    clf.fit(train_X, train_Y)
    y_pred = clf.predict(test_X)
    acc = accuracy(test_Y, y_pred)

    print("Accuracy:", acc)
