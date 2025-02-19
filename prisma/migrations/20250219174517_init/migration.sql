/*
  Warnings:

  - You are about to drop the column `email` on the `Referral` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Referral` table. All the data in the column will be lost.
  - You are about to drop the column `phone` on the `Referral` table. All the data in the column will be lost.
  - You are about to drop the column `referralCode` on the `Referral` table. All the data in the column will be lost.
  - You are about to drop the column `referredBy` on the `Referral` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[referrerEmail]` on the table `Referral` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[refereeEmail]` on the table `Referral` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `refereeEmail` to the `Referral` table without a default value. This is not possible if the table is not empty.
  - Added the required column `refereeName` to the `Referral` table without a default value. This is not possible if the table is not empty.
  - Added the required column `referrerEmail` to the `Referral` table without a default value. This is not possible if the table is not empty.
  - Added the required column `referrerName` to the `Referral` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Referral_email_key` ON `Referral`;

-- DropIndex
DROP INDEX `Referral_phone_key` ON `Referral`;

-- DropIndex
DROP INDEX `Referral_referralCode_key` ON `Referral`;

-- AlterTable
ALTER TABLE `Referral` DROP COLUMN `email`,
    DROP COLUMN `name`,
    DROP COLUMN `phone`,
    DROP COLUMN `referralCode`,
    DROP COLUMN `referredBy`,
    ADD COLUMN `message` VARCHAR(191) NULL,
    ADD COLUMN `refereeEmail` VARCHAR(191) NOT NULL,
    ADD COLUMN `refereeName` VARCHAR(191) NOT NULL,
    ADD COLUMN `referrerEmail` VARCHAR(191) NOT NULL,
    ADD COLUMN `referrerName` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Referral_referrerEmail_key` ON `Referral`(`referrerEmail`);

-- CreateIndex
CREATE UNIQUE INDEX `Referral_refereeEmail_key` ON `Referral`(`refereeEmail`);
