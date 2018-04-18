// src/pages/entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { BaseEntity } from 'typeorm/repository/BaseEntity'

@Entity()
export default class Advert extends BaseEntity {

    @PrimaryGeneratedColumn()
    id?: number

    @Column('text', { nullable: false })
    title: string

    @Column('text', { nullable: true })
    description: string

    @Column('text', { nullable: true })
    picture: string

    @Column('integer', { nullable: false })
    price: number

    @Column('text', { nullable: true })
    email: string

    @Column('text', { nullable: true })
    phone: string
}