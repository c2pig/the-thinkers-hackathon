const routes = {
  route: {
    "job-reference-service": [],
    "loop-service": [],
    "profile-service": [],
    "rating-service": {
      "uprate" : {
        method: 'PUT',
        path: '/users/:userId'
      },
      "get-user-rating": {
        method: 'GET',
        path: '/users/:userId'
      },
      "get-all-user-rating": {
        method: 'GET',
        path: '/users'
      },
      "hello": {
        method: 'GET',
        path: '/hello'
      }

    },
    "user-service": []
  }
}
//TODO: make for configuration sake, but not using at this moment
export const routing = (service) => {
    return (name) => {
      const serviceRoutes = routes.route[service];
      const route = serviceRoutes[name];
      return route;
    }
}
