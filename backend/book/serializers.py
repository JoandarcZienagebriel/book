from rest_framework import serializers
from .models import Service, Book, Availability, InfoForm

class ServiceSerializer(serializers.ModelSerializer):
    class Meta:
        fields=['id', 'name']
        model = Service

class BookSerializer(serializers.ModelSerializer):
    service_name = serializers.CharField(
        source='service.name',
        read_only=True
    )
    class Meta:
        fields=['id','service', 'service_name', 'date', 'time']
        model = Book

    
class AvailabilitySerializer(serializers.ModelSerializer):
    class Meta:
        fields=['day','start','end']
        model = Availability

class InfoSerializer(serializers.ModelSerializer):
    class Meta:
        fields=['username', 'email', 'address','phone']
        model=InfoForm

class CancelSerializer(serializers.ModelSerializer):
    class Meta:
        fields=['service', 'date', 'time']
        model = Book