# Update for an alternative displaying style
Portfolio.js and PastPortfolio.js provide one way for you to display the data which you can check the demos at the buttom of the README.md, denoted as 'Style-1'.   
NewPortfolio.js and NewPastPortfolio.js provide the other way for displaying which you can check 'Style-2' at Demo section.  

## How to switch styles?  
Open App.js and comment or uncomment these two components.


# Tech Stack
- [React——The best front-end framework ever](https://reactjs.org/)
- [Antd UI](https://ant.design/)
- In-deepth customized CSS
- Nginx


# How to use?
## Dev Env
1. git clone.  
2. Run  ``` npm install ```.  
3. Run ```npm start``` . Local server runs on Port 3000  
4. ```src/webData.js``` provides some API which can be loaded into pages. Not all data are included in it. TBD someday MAYBE.  

## Product Env  
1. Run ``` npm run build ```.  
2. You can see some in the console.    
***The build folder is ready to be deployed.  
You may serve it with a static server:***    
```  
npm install -g serve 
serve -s build 
```  
You can see the web app generated then.  
3. If everything goes right, you can deploy it on a server with Nginx or Apache.  

**Before step 4, make sure that you have some knowledge of Nginx.**  
4. Take Nginx as an example. Create a configuration file. Here gives a example configuration file. You can configure more function such as load balance for the web app.  
```  
user root;

events {
	worker_connections 1024; # Default setting
}

http {
	gzip on;
	
	# No gzip IE6
	gzip_disable "msie6";
	
	# Set up if Nginx is used for reverse proxy
	# gzip_proxied any;
	
	# from 1-9. Bigger, Better. But use CPU
	gzip_comp_level 5;
	
	# Minimum file size which will be compressed.
	gzip_min_length 1k;
	
	# Set up the system to get a few units of cache for storing GZip's compressed result data stream. 16 8k represents 16 times the application memory in 8k units with the original data size installed in 8k units.
	gzip_buffers 16 8k;
	
	# Identify http version 
	gzip_http_version 1.1;
	
	# Set which kinds will be compressed.
	gzip_types text/plain text/css application/json application/x-javascript text/javascript text/xml application/xml application/xml+rss image/jpeg image/gif image/png;


	include /etc/nginx/mime.types; # Important

	server {
		listen 80;
		server_name localhost;
		root /root/React-build;
		index index.html;
		
		location ~.*\.css {
			add_header Content-Type text/css;
		}
		
		location ~* ^.+\.(ico|gif|jpg|jpeg|png)$ { 
			access_log off; 
			expires 7d;
		}

		location ~* ^.+\.(css|js|txt|xml)$ {
			access_log off;
			expires 24h;
		}
		
		# Open no-cache mode if you encounter some problem, which will reduce loading speed.
		# location ~.*\.(js|css|html|png|jpg)$ {
		# 	add_header Cache-Control no-cache;
		# }

		location @fallback {
			 rewrite .* /index.html break;
		}
	}
}
```  
5. Run this .conf then you can visit.  
```  nginx -c /etc/nginx/vhost/example.conf  # We always make a vhost directory in nginx to store our .conf. ```  
If you want to stop it, first check the parent PID.  
``` ps aux|grep nginx  ```  
Then stop it.  
``` kill -QUIT [PPID]  ```  


# Compress your images
Large images will reduce loading speed.  
[Try a Unique Powerful JavaScript algorithm to reduce image size by up to 90% without compromising quality](https://www.picdiet.com/).


# Demo-Style1
## PC
![img](https://github.com/yanym/Cornell-Club/blob/master/public/images/Demo/PC.gif)  

## Iphone X
![img](https://github.com/yanym/Cornell-Club/blob/master/public/images/Demo/IphoneX.gif)

## IPad
![img](https://github.com/yanym/Cornell-Club/blob/master/public/images/Demo/Ipad.gif)

## IPad Pro
![img](https://github.com/yanym/Cornell-Club/blob/master/public/images/Demo/IpadPro.gif)  

# Demo-Style2
## PC  
![img](https://github.com/yanym/Cornell-Club/blob/master/public/images/Demo/PC-style2.gif)  

## Iphone X  
![img](https://github.com/yanym/Cornell-Club/blob/master/public/images/Demo/IphoneX-style2.gif)  

## IPad and Ipad Pro  
![img](https://github.com/yanym/Cornell-Club/blob/master/public/images/Demo/Ipad-style2.gif) 


### Some Notes
 - The project remove _openClick from magnific-popup.js. If you want to use popup when you click the portfolio project, please undo the comment of _openClick function and use href='modal-xx' (Eg. href='modal-01') href in Portfolio and PastPortfolio. Also, the magnific-popup.js is not compressed, which means affects a little bit loading performance.  
 - You may see that 'Words' section is hidden in mobile device due to bad compatibility. You can show that by edit index.css file.  

