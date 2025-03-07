import 'fastify';

declare module 'fastify'{
	export interface FastifyRequest{
		user?:{
			id:string,
			name:string,
			email:string,
			created_at:string,
			updated_at:string,
			session_id?:string
		}
	}
}