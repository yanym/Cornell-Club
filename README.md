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
Before step 4, make sure that you have some knowledge of Nginx.  
4. Take Nginx as an example. Make a .conf file.
```  
user root;

events {
	worker_connections 1024; # Default setting
}

http {
	include /etc/nginx/mime.types; # Important

	server {
		listen 80;
		server_name localhost;
		root /root/React-build;
		index index.html;

		# location ~ \.css {
		# 	add_header Content-Type text/css;
		# }
		
		location ~.*\.css {
			add_header Content-Type text/css;
		}

		location ~.*\.(js|css|html|png|jpg)$ {
			add_header Cache-Control no-cache;
		}

		location @fallback {
			 rewrite .* /index.html break;
		}
	}

	server {
		listen 443;
		server_name localhost;
		root /root/React-build;
		index index.html;
		location ~.*\.css {
			add_header Content-Type text/css;
		 }

		location ~.*\.(js|css|html|png|jpg)$ {
			add_header Cache-Control no-cache;
		}

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


## Compress your images
Large images will reduce loading speed.  
[Try a Unique Powerful JavaScript algorithm to reduce image size by up to 90% without compromising quality](https://www.picdiet.com/).

# Demo
## PC
![img](https://github.com/yanym/Cornell-Club/blob/master/public/images/Demo/PC.gif)  

## Iphone X
![img](https://github.com/yanym/Cornell-Club/blob/master/public/images/Demo/IphoneX.gif)

## IPad Pro
![img](https://github.com/yanym/Cornell-Club/blob/master/public/images/Demo/IpadPro.gif)
