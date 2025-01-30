import Fastify from 'fastify'
import cors from '@fastify/cors'
import { alwaysValidSchema } from 'ajv/dist/compile/util';
import { plantsRoutes } from './routes/plantsRoutes';
import { createPlantTypeRoutes } from './routes/createPlantTypeRoute';
import { listPlantTypesRoutes } from './routes/listPlantTypesRoutes';



const app = Fastify({logger: true});

const start = async () => {
    await app.register(cors, {
        origin: ['http://dan-desafio3-aws.s3-website.us-east-2.amazonaws.com'],
        methods: ['GET', 'POST', 'PUT', 'DELETE'], 
        credentials: true 
    });
    
    await app.register(plantsRoutes);
    await app.register(createPlantTypeRoutes);
    await app.register(listPlantTypesRoutes);

    try{
        await app.listen({port: 5000, host: '0.0.0.0'})
    } catch(err){
        process.exit(1)
    }
}

start();
