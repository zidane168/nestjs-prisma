/*
  Warnings:

  - Added the required column `slug` to the `Administrator` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Administrator` ADD COLUMN `slug` VARCHAR(191) NOT NULL;
