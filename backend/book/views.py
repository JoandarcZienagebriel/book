from django.shortcuts import render
from rest_framework import generics
from .serializers import ServiceSerializer, BookSerializer, AvailabilitySerializer, InfoSerializer, CancelSerializer
from .models import Service, Book, Availability, InfoForm
from rest_framework.response import Response
from rest_framework.generics import DestroyAPIView
class ListService(generics.ListCreateAPIView):
    queryset= Service.objects.all()
    serializer_class= ServiceSerializer

class DetailService(generics.RetrieveUpdateDestroyAPIView):
    queryset= Service.objects.all()
    serializer_class= ServiceSerializer

class ListBook(generics.ListCreateAPIView):
    queryset= Book.objects.all()
    serializer_class= BookSerializer

class DetailBook(generics.RetrieveUpdateDestroyAPIView):
    queryset= Book.objects.all()
    serializer_class= BookSerializer


class AvailabilityView(generics.ListCreateAPIView):
    queryset = Availability.objects.all()
    serializer_class = AvailabilitySerializer

from rest_framework.exceptions import ValidationError


class BookedTimesView(generics.ListAPIView):
    serializer_class = BookSerializer

    def get_queryset(self):
        service_id = self.request.query_params.get("service")
        date = self.request.query_params.get("date")

        if not service_id or not date:
            raise ValidationError({
                "error": "service and date are required."
            })

        return Book.objects.filter(
            service_id=service_id,
            date=date
        ).order_by("time")

class InfoView(generics.ListCreateAPIView):
    queryset= InfoForm.objects.all()
    serializer_class=InfoSerializer

class CancelBooking(DestroyAPIView):
    queryset=Book.objects.all()
    serializer_class=CancelSerializer
