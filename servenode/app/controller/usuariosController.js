const Usuarios = require('../models/usuariosModels');

exports.crearUsuarios = async(req, res) => {
	try{
		let usuario;
		// Creamos nuestro usuario
		usuario = new Usuarios(req.body);
		await curso.save();
		// Cambiado por curso
        res.send(usuario);

	}catch(error){
		console.log(error);
		res.status(500).send('Hubo un error');
	}
}

exports.obtenerUsuarios = async(req, res) => {
	try {
		const usuarios = await Usuarios.find();
		res.json(usuarios)
	} catch(error){
		console.log(error);
		res.status(500).send('Hubo un error');
	}
}

exports.actualizarUsuarios = async (req, res) => {
	try {
		const { userName, CodeOfTheTaskToBePerformed , DescriptionofTheTaskToBePerformed, Score, State} = req.body;
		let usuarios = await Usuarios.findById(req.params.id);
		//Cambiado por curso
		if(!tarea) {
			res.status(404).json({ msg: 'No existe el Usuario' })
		} 
	
		usuarios.userName = userName;
		usuarios.CodeOfTheTaskToBePerformed = CodeOfTheTaskToBePerformed;
		usuarios.DescriptionofTheTaskToBePerformed = DescriptionofTheTaskToBePerformed;
		usuarios.Score = Score;
		usuarios.State = State;

		usuarios = await Usuarios.findOneAndUpdate({ _id: req.params.id }, curso, { new: true} )
		res.json(usuarios);
	} catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}


exports.obtenerUsuarios = async (req, res) => {
	try {
        let usuario = await Usuarios.findById(req.params.id);
        if(!usuario) {
            res.status(404).json({ msg: 'No existe los Usuarios' })
        }     
        res.json(usuario);       
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.eliminarUsuarios = async (req, res) => {
	try {

		let usuarios = await Usuarios.findById(req.params.id);
		if(!usuarios){
			res.status(404).json({ msg: 'No existe los Usuarios'})
		}
		await Usuarios.findOneAndRemove({ _id: req.params.id })
        res.json({ msg: 'Curso eliminado con exito' });       
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}









