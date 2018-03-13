import CarsController from "./cars-controller";

const routes = [
    {
        path: "/cars/getAllCars",
        method: "GET",
        config: { auth: false },
        handler: CarsController.getAllCars
    }
];

export default routes;