import express from 'express'

const cartRouter = express.Router()
export const ROUTES = [
    {
        path: '/news',
        router: cartRouter
    },

];