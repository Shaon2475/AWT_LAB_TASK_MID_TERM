import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ILike, Repository } from 'typeorm';
import { Products } from './Entities/products.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { PartialUpdateProductDto } from './dto/partial-update-product.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Products)
    private productsRepo: Repository<Products>,
  ) {}

  async create(dto: CreateProductDto) {
    const product = await this.productsRepo.save(dto);
    return { message: 'Product created', data: product };
  }


  async findAll() {
    const products = await this.productsRepo.find({
      order: { createdAt: 'DESC' },
    });
    return { message: 'All products', count: products.length, data: products };
  }

  async findOne(id: number) {
    const product = await this.productsRepo.findOne({ where: { id } });
    if (!product) throw new NotFoundException(`Product with id ${id} not found`);
    return { message: 'Product found', data: product };
  }

  async update(id: number, dto: PartialUpdateProductDto) {
    await this.findOne(id); 
    await this.productsRepo.update(id, dto);
    const product = await this.productsRepo.findOne({ where: { id } });
    return { message: 'Product updated', data: product };
  }

  async replace(id: number, dto: UpdateProductDto) {
    await this.findOne(id); 
    await this.productsRepo.update(id, dto);
    const product = await this.productsRepo.findOne({ where: { id } });
    return { message: 'Product replaced', data: product };
  }

  async remove(id: number) {
    await this.findOne(id);
    await this.productsRepo.delete(id);
    return { message: 'Product deleted', id };
  }

  async findByCategory(category: string) {
    const products = await this.productsRepo.find({ where: { category } });
    return { message: 'Products by category', count: products.length, data: products };
  }

  async search(keyword: string) {
    const products = await this.productsRepo.find({
      where: { name: ILike(`%${keyword}%`) },
    });
    return { message: 'Search result', count: products.length, data: products };
  }

  async toggleActive(id: number) {
    const product = await this.productsRepo.findOne({ where: { id } });
    if (!product) throw new NotFoundException(`Product with id ${id} not found`);
    product.isActive = !product.isActive;
    const saved = await this.productsRepo.save(product);
    return { message: 'Status toggled', data: saved };
  }
}