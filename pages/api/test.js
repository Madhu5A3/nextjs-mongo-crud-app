import dbConnect from '../../utils/DBconnection';

dbConnect();

export default async (req,res) => {
    res.json({test: 'test'});
}