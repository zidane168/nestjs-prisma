/*
  Warnings:

  - You are about to drop the column `createdById` on the `Permission` table. All the data in the column will be lost.
  - You are about to drop the column `updatedById` on the `Permission` table. All the data in the column will be lost.
  - You are about to drop the column `createdById` on the `Role` table. All the data in the column will be lost.
  - You are about to drop the column `updatedById` on the `Role` table. All the data in the column will be lost.
  - Added the required column `createdBy` to the `Permission` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedBy` to the `Permission` table without a default value. This is not possible if the table is not empty.
  - Added the required column `createdBy` to the `Role` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedBy` to the `Role` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Permission` DROP FOREIGN KEY `Permission_createdById_fkey`;

-- DropForeignKey
ALTER TABLE `Permission` DROP FOREIGN KEY `Permission_updatedById_fkey`;

-- DropForeignKey
ALTER TABLE `Role` DROP FOREIGN KEY `Role_createdById_fkey`;

-- DropForeignKey
ALTER TABLE `Role` DROP FOREIGN KEY `Role_updatedById_fkey`;

-- AlterTable
ALTER TABLE `Permission` DROP COLUMN `createdById`,
    DROP COLUMN `updatedById`,
    ADD COLUMN `createdBy` INTEGER NOT NULL,
    ADD COLUMN `updatedBy` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `Role` DROP COLUMN `createdById`,
    DROP COLUMN `updatedById`,
    ADD COLUMN `createdBy` INTEGER NOT NULL,
    ADD COLUMN `updatedBy` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Role` ADD CONSTRAINT `Role_createdBy_fkey` FOREIGN KEY (`createdBy`) REFERENCES `Administrator`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Role` ADD CONSTRAINT `Role_updatedBy_fkey` FOREIGN KEY (`updatedBy`) REFERENCES `Administrator`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Permission` ADD CONSTRAINT `Permission_createdBy_fkey` FOREIGN KEY (`createdBy`) REFERENCES `Administrator`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Permission` ADD CONSTRAINT `Permission_updatedBy_fkey` FOREIGN KEY (`updatedBy`) REFERENCES `Administrator`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
