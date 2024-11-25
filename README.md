# install nestjs 
npm i -g @nestjs/cli
nest new nestjs-prisma

# install prisma
npm i prisma -D
npx prisma init

# init database
npx prisma migrate dev --name init 

# when you change something on the schema.prisma file (change structure)
npx prisma generate

# when u change something
npx prisma migrate dev --name name_change

# create a module database
nest g module database

# create a service database
nest g service database

# create rest API quickly
nest g resource employees