from flask import Flask
from flask_restful import Resource, Api

app = Flask(__name__)
api = Api(app)

items = []


class Item(Resource):
    def get(self, name):
        for item in items:
            if item['name'] == name:
                return item
        return {'item': None}

    def post(self, name):
        item = {'name': name, 'price': 12.00}
        items.append(item)
        return item


# http://127.0.0.1:5000/student/Rolf
api.add_resource(Item, '/item/<string:name>')

app.run(port=5000)  # default port
