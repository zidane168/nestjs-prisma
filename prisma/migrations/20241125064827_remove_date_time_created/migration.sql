/*
  Warnings:

  - You are about to drop the column `created` on the `Permission` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `Permission_createdBy_fkey` ON `Permission`;

-- DropIndex
DROP INDEX `Permission_updatedBy_fkey` ON `Permission`;

-- DropIndex
DROP INDEX `Post_createdBy_fkey` ON `Post`;

-- DropIndex
DROP INDEX `Post_updatedBy_fkey` ON `Post`;

-- DropIndex
DROP INDEX `Role_createdBy_fkey` ON `Role`;

-- DropIndex
DROP INDEX `Role_updatedBy_fkey` ON `Role`;

-- AlterTable
ALTER TABLE `Permission` DROP COLUMN `created`;
