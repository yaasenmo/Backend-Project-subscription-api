import { Router } from "express";

const subscriptionRouter = Router();

subscriptionRouter.get('/', (req, res) => res.send ({title: "GET all subcriptions"}));

subscriptionRouter.get('/id', (req, res) => res.send ({title: "GET all subcriptions details"}));

subscriptionRouter.post('/', (req, res) => res.send ({title: "CREATE  subcription"}));

subscriptionRouter.put('/:id', (req, res) => res.send ({title: "UPDATE subcription"}));

subscriptionRouter.delete('/:id', (req, res) => res.send ({title: "DELETE subcription"}));

subscriptionRouter.get('/', (req, res) => res.send ({title: "GET all subcriptions"}));

subscriptionRouter.get('/user/:id', (req, res) => res.send ({title: "GET all user subcriptions"}));

subscriptionRouter.get('/:id/cancel', (req, res) => res.send ({title: "CANCEL subcriptions"}));

subscriptionRouter.get('/upcoming-renewals', (req, res) => res.send ({title: "GET upcoming renewals"}));



export default subscriptionRouter;