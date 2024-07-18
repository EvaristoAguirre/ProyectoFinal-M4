import { Controller, FileTypeValidator, MaxFileSizeValidator, Param, ParseFilePipe, Post, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { FileUploadService } from './file-upload.service';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/Auth/Guards/auth.guard';
@ApiTags('Files')
@Controller('files')
export class FileUploadController {
    constructor(private readonly fileUploadService: FileUploadService){}
    
    @Post('/uploadImage/:id')
    @UseGuards(AuthGuard)
    @UseInterceptors(FileInterceptor('file'))
    uploadImage(
        @Param('id') productId:string, 
        @UploadedFile(
            new ParseFilePipe({
                validators:[
                    new MaxFileSizeValidator({
                        maxSize: 200000,
                        message: 'Máximo tamaño permitido: 200kb'
                    }),
                    new FileTypeValidator({
                        fileType: /(.jpg|.png|.jpeg|.webp)/,
                    }),
                ]
            })
        ) file: Express.Multer.File,
    ){
        return this.fileUploadService.uploadImage(file, productId)
    }
}
