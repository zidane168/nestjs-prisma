-- DropForeignKey
ALTER TABLE `PostFile` DROP FOREIGN KEY `PostFile_postId_fkey`;

-- AlterTable
ALTER TABLE `PostFile` MODIFY `postId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `PostFile` ADD CONSTRAINT `PostFile_postId_fkey` FOREIGN KEY (`postId`) REFERENCES `Post`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
