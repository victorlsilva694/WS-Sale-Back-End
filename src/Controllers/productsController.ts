import { Router, Request, Response } from "express";
import { getRepository } from "typeorm";
import { Products } from "../DataBases/entities/productsModel";
import { ImagesProduct } from "../DataBases/entities/ImagesModel";
import multer from "multer";
import { get } from "@srhenry/storage-manager";

export const addNewProduct = async (req: Request, res: Response) => {
  const {
    userId,
    productName,
    productPrice,
    productCategory,
    productDescription,
  } = req.body;
  const productRepository = getRepository(Products);

  const newProduct = productRepository.create({
    nameProduct: productName,
    imageLink: req.file?.path,
    priceProduct: productPrice,
    sellerId: userId,
    categoryProduct: productCategory,
    productDescription: productDescription
  });

  await productRepository.save(newProduct);
  return res.status(201).json({
    newProduct,
  });

  return res.json({ message: "product is missing" });
};

export const renderProduct = async (req: Request, res: Response) => {
  const productRepository = getRepository(Products);
  const searchProduct = await productRepository.find();
  const productsPromise = await Promise.all(
    searchProduct.map(async (product) => {
      const imageProduct = await get(product.imageLink, "base64");
      return {
        ...product,
        imageProduct,
      };
    })
  );

  res.status(200).json(productsPromise);
};
