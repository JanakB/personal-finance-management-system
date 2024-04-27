def decisionTreeRegressor(X, Y, learning_rate, iteration):

    m = Y.size
    theta = np.zeros((X.shape[1], 1))
    cost_list = []

    for i in range(iteration):

        y pred = np.dot(X, theta)
        cost = (1/(2*m))*np.sum(np.square (y_pred - Y))
        d_theta = (1/m)*np.dot(X.T, y_pred - Y)
        theta = theta - learning_rate*d_theta
        cost_list.append(cost)
        if(i%(iteration/10)==0): print("Cost is", cost)

    return theta

    