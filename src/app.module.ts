import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhotosModule } from './photos/photos.module';
import { PhotoMetadataModule } from './photo-metadata/photo-metadata.module';
import { AlbumModule } from './album/album.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      database: 'rsys_orm_nestjs',
      username: 'root',
      password: 'root',
      autoLoadEntities: true,
      synchronize: true,
    }),
    UsersModule,
    PhotosModule,
    PhotoMetadataModule,
    AlbumModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
