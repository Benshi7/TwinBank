# Generated by Django 4.2.7 on 2023-11-26 20:22

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('cliente', '0002_alter_marcastarjeta_table_alter_tiposcliente_table'),
    ]

    operations = [
        migrations.AlterModelTable(
            name='tiposcliente',
            table='TiposCliente',
        ),
    ]
