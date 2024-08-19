import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "src/users/entities/user.entity";

@Entity()
export class Post {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    desc: string;

    @ManyToOne(() => User, (user) => user.posts)
    user: User;

}

// export const postMocks = [
//     {title: 'post1', desc: 'post1 desc', userId: 1},
//     {title: 'post2', desc: 'post2 desc', userId: 2},
//     {title: 'post3', desc: 'post3 desc', userId: 1},
//     {title: 'post4', desc: 'post4 desc', userId: 2},
// ];
