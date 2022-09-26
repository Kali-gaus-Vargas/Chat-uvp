from django.db import models

# Create your models here.


class messages(models.Model):
    id_message = models.AutoField(primary_key=True, editable=False, null=False)
    message_text = models.CharField(max_length=200)
