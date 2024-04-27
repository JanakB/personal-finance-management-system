from django.db import models

# Create your models here.
class Income(models.Model):

    GENDER_CHOICES = (
        (0, 'Male'),
        (1, 'Female'),
    )

    OCCUPATION_CHOICES = (
        (0, 'Machine-op-inspct'),
        (1, 'Farming-fishing'),
        (2, 'Protective-serv'),
        (3, 'Other-service'),
        (4, 'Prof-specialty'),
        (5, 'Craft-repair'),
        (6, 'Adm-clerical'),
        (7, 'Exec-managerial'),
        (8, 'Tech-support'),
        (9, 'Sales'),
        (10, 'Priv-house-serv'),
        (11, 'Transport-moving'),
        (12, 'Handlers-cleaners'),
        (13, 'Armed-Forces'),
    )

    WORKCLASS_CHOICES = (
        (0, 'Private'),
        (1, 'Local-gov'),
        (2, 'Self-emp-not-inc'),
        (3, 'Federal-gov'),
        (4, 'State-gov'),
        (5, 'Self-emp-inc'),
        (6, 'Without-pay'),
        (7, 'Never-worked'),
    )

    MARITAL_STATUS_CHOICES = (
        (0, 'Never-married'),
        (1, 'Married-civ-spouse'),
        (2, 'Widowed'),
        (3, 'Divorced'),
        (4, 'Separated'),
        (5, 'Married-spouse-absent'),
        (6, 'Married-AF-spouse'),
    )

    RELATIONSHIP_CHOICES = (
        (0, 'Own-child'),
        (1, 'Husband'),
        (2, 'Not-in-family'),
        (3, 'Unmarried'),
        (4, 'Wife'),
        (5, 'Other-relative'),
    )

    RACE_CHOICES = (
        (0, 'Black'),
        (1, 'White'),
        (2, 'Asian-Pac-Islander'),
        (3, 'Other'),
        (4, 'Amer-Indian-Eskimo'),
    )

    NATIVE_COUNTRY_CHOICES = (
        (0, 'United-States'),
        (1, 'Peru'),
        (2, 'Guatemala'),
        (3, 'Mexico'),
        (4, 'Dominican-Republic'),
        (5, 'Ireland'),
        (6, 'Germany'),
        (7, 'Philippines'),
        (8, 'Thailand'),
        (9, 'Haiti'),
        (10, 'El-Salvador'),
        (11, 'Puerto-Rico'),
        (12, 'Vietnam'),
        (13, 'South'),
        (14, 'Columbia'),
        (15, 'Japan'),
        (16, 'India'),
        (17, 'Cambodia'),
        (18, 'Poland'),
        (19, 'Laos'),
        (20, 'England'),
        (21, 'Cuba'),
        (22, 'Taiwan'),
        (23, 'Italy'),
        (24, 'Canada'),
        (25, 'Portugal'),
        (26, 'China'),
        (27, 'Nicaragua'),
        (28, 'Honduras'),
        (29, 'Iran'),
        (30, 'Scotland'),
        (31, 'Jamaica'),
        (32, 'Ecuador'),
        (33, 'Yugoslavia'),
        (34, 'Hungary'),
        (35, 'Hong'),
        (36, 'Greece'),
        (37, 'Trinadad&Tobago'),
        (38, 'Outlying-US(Guam-USVI-etc)'),
        (39, 'France'),
        (40, 'Holand-Netherlands'),
    )

    EDUCATION_CHOICES = (
        (1, 'Preschool'),
        (2, '1st-4th'),
        (3, '5th-6th'),
        (4, '7th-8th'),
        (5, '9th'),
        (6, '10th'),
        (7, '11th'),
        (8, '12th'),
        (9, 'HS-grad'),
        (10, 'Some-college'),
        (11, 'Assoc-voc'),
        (12, 'Assoc-acdm'),
        (13, 'Bachelors'),
        (14, 'Masters'),
        (15, 'Prof-school'),
        (16, 'Doctorate'),
    )

    age = models.IntegerField()
    workclass = models.IntegerField(choices=WORKCLASS_CHOICES)
    education_num = models.IntegerField(choices=EDUCATION_CHOICES)
    marital_status = models.IntegerField(choices=MARITAL_STATUS_CHOICES)
    occupation = models.IntegerField(choices=OCCUPATION_CHOICES)
    relationship = models.IntegerField(choices=RELATIONSHIP_CHOICES)
    race = models.IntegerField(choices=RACE_CHOICES)
    gender = models.IntegerField(choices=GENDER_CHOICES)
    capital_gain = models.IntegerField()
    capital_loss = models.IntegerField()
    hours_per_week = models.IntegerField()
    native_country = models.IntegerField(choices=NATIVE_COUNTRY_CHOICES)

    