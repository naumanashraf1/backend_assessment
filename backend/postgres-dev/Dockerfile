FROM postgres:latest
RUN sudo chown -R postgres:postgres /var/lib/postgresql/data
RUN sudo chmod -R 700 /var/lib/postgresql/data
COPY setup-databases.sh /docker-entrypoint-initdb.d/