# Use a base image with a web server, such as Nginx or Apache
FROM nginx

# Copy your HTML, CSS, and JavaScript files to the appropriate location in the container
COPY index.html /usr/share/nginx/html/
COPY styles.css /usr/share/nginx/html/
COPY script.js /usr/share/nginx/html/


COPY default.conf /etc/nginx/conf.d/default.conf  
#configuracija za nginx da bih mogli da vidimo aplikaciju inca ce samo da prikaze welcom to nginx