from django.db import models
from django.core.validators import RegexValidator
class Service(models.Model):
    name = models.CharField(max_length=100)
   
    def __str__(self):
        return self.name


class Book(models.Model):
    service = models.ForeignKey(Service, on_delete= models.CASCADE)
    date = models.DateField()
    time = models.TimeField()
    

    class Meta:
        constraints = [
            models.UniqueConstraint(
                fields=["service", "date", "time"],
                name="unique_service_datetime"
            )
        ]

    def __str__(self):
        return f"{self.service.name}-{self.date}-{self.time}"


class Availability(models.Model):
    day= models.CharField(max_length=100)
    start= models.DecimalField(max_digits=4, decimal_places=2)
    end =models.DecimalField(max_digits=4, decimal_places=2)


class InfoForm(models.Model):
    username=models.CharField(max_length=100)
    email=models.EmailField()   
    phone = models.CharField(
    max_length=13,
    validators=[
        RegexValidator(
            regex=r'^\+251\d{9}$',
            message='Phone number must start with +251 followed by exactly 9 digits.'
        )
    ]
)
    address=models.TextField()
