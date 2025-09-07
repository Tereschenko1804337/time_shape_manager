from django.shortcuts import render


def get_index_page(request):

    context = {
        'name': 'Alexey',
    }
    return render(request, 'index.html', context=context)