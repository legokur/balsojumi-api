import { Field, ID, ObjectType } from 'type-graphql';
import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import Reading from './Reading';

type MotionType = 'Bill' | 'Decision' | 'Request' | 'Inquiry';

@Entity()
@ObjectType()
class Motion extends BaseEntity {

    @PrimaryGeneratedColumn()
    @Field(type => ID)
    id: number;

    @Column({ unique: true })
    @Field()
    uid: string;

    @Column('varchar', { length: 2000 })
    @Field()
    title: string;

    @Column()
    @Field()
    type: MotionType;

    @Column({ unique: true })
    @Field()
    number: string;

    @Column('varchar', { length: 1000, nullable: true })
    @Field({ nullable: true })
    commission: string;

    @Column('varchar', { length: 500, nullable: true })
    @Field({ nullable: true })
    referent: string;

    @Column('varchar', { length: 2000, nullable: true })
    @Field({ nullable: true })
    submitters: string;

    @Column('varchar', { length: 5000, nullable: true })
    @Field({ nullable: true })
    docs: string;

    @Column('date')
    @Field()
    submissionDate: string;

    @Column()
    isFinalized: boolean;

    @OneToMany(() => Reading, reading => reading.motion, { cascade: true })
    readings: Reading[];
}

export default Motion;