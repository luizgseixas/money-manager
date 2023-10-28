/*
  Warnings:

  - You are about to drop the column `documents` on the `tb_user` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[document]` on the table `tb_user` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `document` to the `tb_user` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `tb_user_documents_key` ON `tb_user`;

-- AlterTable
ALTER TABLE `tb_user` DROP COLUMN `documents`,
    ADD COLUMN `document` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `tb_user_document_key` ON `tb_user`(`document`);
