import Boom from "boom";
import Bookshelf from "../../db/database";
import Cars from "../../db/model/cars";

class CarsController {
	getAllCars(request, reply) {
		const rawSql = `select * from cars`;

		Bookshelf.knex.raw(rawSql)
			.then((result) => {
				if (result !== null) {
					reply({
						data: result[0]
					});

					return;

				}
			}).catch((error) => {
				reply(Boom.badRequest(error));

				return;
			});
	}
}
export default new CarsController();