module.exports =  ({ env }) => ({
	connection: {
		client: 'mysql',
		connection: {
		host: env('DATABASE_HOST', 'https://www.db4free.net/phpMyAdmin'),
			port: env.int('DATABASE_PORT', 3306),
			database: env('DATABASE_NAME', 'sticopro'),
			user: env('DATABASE_USERNAME', 'sticoproadmin'),
			password: env('DATABASE_PASSWORD', 'Pa$$w0rd'),
			ssl: env.bool('DATABASE_SSL', false)
		}
	}
});
