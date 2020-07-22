import { Request, Response } from "express";
import { User } from "../entity/User";
import { getRepository } from "typeorm";

export const getUsers = async (req:Request, res:Response) : Promise<Response> => {
   const users = await getRepository(User).find(); 

   return res.json(users);
}

export const getUser = async (req:Request, res:Response) : Promise<Response> => {
    
   
    const id = Number(req.params.id); 
    const user = await getRepository(User).findOne(id); 
 
    return res.json(user);
 }

export const createUser = async (req:Request, res:Response) : Promise<Response> => {
    
    const newUser =  getRepository(User).create(req.body); 

    const response = await getRepository(User).save(newUser); 
 
    return res.status(201).json(response);
 }

 export const updateUser = async (req:Request, res:Response) : Promise<Response> => {
    
   
    const id = Number(req.params.id); 
    const user = await getRepository(User).findOne(id); 
console.log(user); 
    if (user) {
        getRepository(User).merge(user, req.body)

        const response = await getRepository(User).save(user); 

        return res.json(response); 
    }
 
    return res.status(404).json({msg: "Not found"}); 
 }

 export const deleteUser = async (req:Request, res:Response) : Promise<Response> => {
    
   
    const id = Number(req.params.id); 
    const user = await getRepository(User).findOne(id); 

    if (user) {
      getRepository(User).merge(user, req.body)

      const response = await getRepository(User).delete(id);

      return res.json(response); 
  }
 
    return res.status(404).json({msg: "Not found"}); 
 }

 export const load = async (req:Request, res:Response) : Promise<Response> => {
    
   return res.json("online service"); 
}