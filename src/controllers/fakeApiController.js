const axios = require('axios');
const { dataIsCreate, dataIsUpdate, dataTester } = require('../helpers/datas');

module.exports = {
    // get all data
    getFakeData: async (req, res) => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            res.status(200).json({
                message: 'Success getting fake data',
                error: null,
                data: response.data,
                success: true
            });
        } catch (error) {
            res.status(500).json({
                message: 'Error getting fake data',
                error: error,
                data: null,
                success: false
            });
        }
    },
    // get data by id
    getFakeDataById: async (req, res) => {
        try {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${req.params.id}`);
            res.status(200).json({
                message: 'Success getting fake data by id',
                error: null,
                data: response.data,
                success: true
            });
        } catch (error) {
            res.status(500).json({
                message: 'Error getting fake data by id',
                error: error,
                data: null,
                success: false
            });
        }
    },
    // create data
    createFakeData: async (req, res) => {
        try {
            const response = await axios.post('https://jsonplaceholder.typicode.com/posts', dataIsCreate);
            res.status(200).json({
                message: 'Success creating fake data',
                error: null,
                data: response.data,
                success: true
            });
        } catch (error) {
            res.status(500).json({
                message: 'Error creating fake data',
                error: error,
                data: null,
                success: false
            });
        }
    },
    // update data
    updateFakeData: async (req, res) => {
        try {
            const response = await axios.put(`https://jsonplaceholder.typicode.com/posts/${req.params.id}`, dataIsUpdate);
            res.status(200).json({
                message: 'Success updating fake data',
                error: null,
                data: response.data,
                success: true
            });
        } catch (error) {
            res.status(500).json({
                message: 'Error updating fake data',
                error: error,
                data: null,
                success: false
            });
        }
    },
    // Delete data
    deleteFakeData: async (req, res) => {
        try {
            const response = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${req.params.id}`);
            res.status(200).json({
                message: 'Success deleting fake data',
                error: null,
                data: response.data,
                success: true
            });
        } catch (error) {
            res.status(500).json({
                message: 'Error deleting fake data',
                error: error,
                data: null,
                success: false
            });
        }
    }
}