import uuid
from django.shortcuts import render

# Create your views here.
def index(request):
    if 'tasks' not in request.session:
        tasks = [
            {'id': str(uuid.uuid4()), 'title': 'Example of a task done', 'description': 'Description 1'},
            {'id': str(uuid.uuid4()), 'title': 'Another example of a task', 'description': 'Description 2'},
        ]
        request.session['tasks'] = tasks
        request.session.modified = True

    return render(request, "todoapp/index.html", {'tasks': request.session['tasks']})