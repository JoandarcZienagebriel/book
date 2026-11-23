from django.contrib import admin
from .models import Service, Book, Availability, InfoForm

class ServiceAdmin(admin.ModelAdmin):
    list_display=(
        'name',
   
    )

class BookAdmin(admin.ModelAdmin):
    list_display=(
        'service',
        'date',
        'time',
    )

class AvailabilityAdmin(admin.ModelAdmin):
    list_display=[
        'day',
        'start',
        'end',
    ]

class InfoAdmin(admin.ModelAdmin):
    list_display=[
        'username',
        'email',
        'phone',
        'address',
    ]

admin.site.register(Book, BookAdmin)
admin.site.register(Service, ServiceAdmin)
admin.site.register(Availability, AvailabilityAdmin)
admin.site.register(InfoForm, InfoAdmin)
# Register your models here.
