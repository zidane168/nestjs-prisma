npm i prisma -D
npx prisma init

# init database
npx prisma migrate dev --name init 

# when change something on the prisma file (schema file)
npx prisma generate
npx prisma migrate dev --name name_change

# create a module database
nest g module database

# create a service database
nest g service database

# create rest API quickly
nest g resource employees