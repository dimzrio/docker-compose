# Docker Compose

<h3> Prometheus Grafana and Alertmanager </h3>

Docker compose script for setup monitoring tools using [Grafana](https://github.com/grafana/grafana), [Prometheus](https://github.com/prometheus) and [Alertmanager](https://github.com/prometheus/alertmanager).

<h3> Cadvisor </h3>

Docker compose script for docker container monitoring. You can use this for scrape using [Prometheus](https://github.com/prometheus)

<h3> Blackbox Exporter </h3>

Docker compose script for monitoring services  HTTP,HTTPS,DNS,TCP and ICMP using [Blackbox](https://github.com/prometheus/blackbox_exporter).

<h6> Installation</h6>

$ git clone https://github.com/dimzrio/docker-compose.git

$ cd blackbox-exporter/blackboxdata

$ docker build -t prom/blackbox-exporter:v.1.0.0 .

$ cd ..

$ docker-compose up -d

<h3> Jenkins </h3>

Docker compose script for setup [Jenkins](https://jenkins.io) using docker.

<h3> Nginx-proxy </h3>

Docker compose script for setup domain monitoring tools using [Nginx](https://nginx.com) docker.

<h3> Nginx-php-fpm </h3>

Docker compose script for setup webserver using [Nginx](https://nginx.com) and [PHP](https://php-fpm.org/) docker.