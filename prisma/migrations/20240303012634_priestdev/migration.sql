/*
  Warnings:

  - You are about to drop the `PortfolioItem` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `PortfolioItem`;

-- CreateTable
CREATE TABLE `Portfolioitem` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `category` VARCHAR(191) NOT NULL,
    `image` VARCHAR(191) NOT NULL,
    `link` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
