-- DropForeignKey
ALTER TABLE `Permission` DROP FOREIGN KEY `Permission_createdBy_fkey`;

-- DropForeignKey
ALTER TABLE `Permission` DROP FOREIGN KEY `Permission_updatedBy_fkey`;

-- DropForeignKey
ALTER TABLE `Post` DROP FOREIGN KEY `Post_createdBy_fkey`;

-- DropForeignKey
ALTER TABLE `Post` DROP FOREIGN KEY `Post_updatedBy_fkey`;

-- DropForeignKey
ALTER TABLE `Role` DROP FOREIGN KEY `Role_createdBy_fkey`;

-- DropForeignKey
ALTER TABLE `Role` DROP FOREIGN KEY `Role_updatedBy_fkey`;

-- AlterTable
ALTER TABLE `Permission` MODIFY `createdBy` INTEGER NULL,
    MODIFY `updatedBy` INTEGER NULL;

-- AlterTable
ALTER TABLE `Post` MODIFY `createdBy` INTEGER NULL,
    MODIFY `updatedBy` INTEGER NULL;

-- AlterTable
ALTER TABLE `Role` MODIFY `createdBy` INTEGER NULL,
    MODIFY `updatedBy` INTEGER NULL;

-- AlterTable
ALTER TABLE `Setting` MODIFY `createdBy` INTEGER NULL,
    MODIFY `updatedBy` INTEGER NULL;
