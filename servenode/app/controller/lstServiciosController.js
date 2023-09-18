const lstServicios = require('../models/lstServiciosModels');

exports.crearlstServicios = async(req, res) => {
    try{
        let lstServicio;
        // Creamos nuestro servicio
        lstServicio = new lstServicios(req.body);
        await curso.save();
        // Puse tarea pero puede ser cliente
        res.send(tarea);

    }catch(error){
		console.log(error);
		res.status(500).send('Hubo un error');
    }
}

exports.obtenerlstServicios = async(req, res) => {
    try {
        const lstServicios = await lstServicios.find();
		res.json(lstServicios)
	} catch(error){
		console.log(error);
		res.status(500).send('Hubo un error');
	}
}

exports.actualizarlstServicios = async (req, res) => {
	try {
		const { codSer, nombreSer, descripcionSer, PrecioSer, imagenSer, stockSer} = req.body;
		let lstServicios = await lstServicios.findById(req.params.id);
		// Aqui tiene que ir cliente
        if(!tarea) {
			res.status(404).json({ msg: 'No existe la lista de Servicios' })
		} 
		lstServicios.codSer = codSer;
		lstServicios.nombreSer = nombreSer;
		lstServicios.descripcionSer = descripcionSer;
		lstServicios.PrecioSer = PrecioSer;
		lstServicios.imagenSer = imagenSer;
		lstServicios.stockSer = stockSer;

		lstServicios = await lstServicios.findOneAndUpdate({ codSer: req.params.codSer }, lstServicios, { new: true} )
		res.json(lstServicios);
	} catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerlstServicios = async (req, res) => {
	try {
        let lstServicios = await lstServicios.findById(req.params.id);
        if(!lstServicios) {
            res.status(404).json({ msg: 'No existe la Lista de Servicios' })
        }     
        res.json(lstServicios);       
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.eliminarlstServicios = async (req, res) => {
	try {

		let lstServicios = await lstServicios.findById(req.params.id);
		if(!lstServicios){
			res.status(404).json({ msg: 'No existe la listra de Servicios'})
		}

        // cambiar el nombre de Curso
		await Curso.findOneAndRemove({ _id: req.params.id })
        res.json({ msg: 'Curso eliminado con exito' });       
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

