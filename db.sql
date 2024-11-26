DROP TABLE IF EXISTS `Administrator`;
CREATE TABLE `Administrator` (
  `id` int NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `enabled` tinyint(1) NOT NULL DEFAULT '1',
  `lastLoggedIn` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `created` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updated` datetime(3) DEFAULT NULL,
  `slug` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `Administrator`
--

INSERT INTO `Administrator` (`id`, `name`, `email`, `password`, `phone`, `enabled`, `lastLoggedIn`, `created`, `updated`, `slug`) VALUES
(1, 'admin', 'admin@gmail.com', '$2b$10$qTNOn.2T4JdWG1S3hbj85uutbfBe68UMumJwFvVGzoTDXmLW3GuEy', '0906440368', 1, '2024-11-25 15:39:52.000', '2024-11-25 15:39:52.000', NULL, 'super-admin'),
(3, 'test', 'test@gmail.com', '$2b$10$qTNOn.2T4JdWG1S3hbj85uutbfBe68UMumJwFvVGzoTDXmLW3GuEy', '0906440369', 1, '2024-11-25 15:39:52.000', '2024-11-25 15:39:52.000', NULL, 'sale');

-- --------------------------------------------------------

--
-- Table structure for table `AdministratorRole`
--

DROP TABLE IF EXISTS `AdministratorRole`;
CREATE TABLE `AdministratorRole` (
  `id` int NOT NULL,
  `administratorId` int NOT NULL,
  `roleId` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `AdministratorRole`
--

INSERT INTO `AdministratorRole` (`id`, `administratorId`, `roleId`) VALUES
(3, 1, 1),
(4, 1, 2),
(5, 3, 2);

-- --------------------------------------------------------

--
-- Table structure for table `Permission`
--

DROP TABLE IF EXISTS `Permission`;
CREATE TABLE `Permission` (
  `id` int NOT NULL,
  `slug` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `controller` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `action` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `updated` datetime(3) DEFAULT NULL,
  `createdBy` int DEFAULT NULL,
  `updatedBy` int DEFAULT NULL,
  `created` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `Permission`
--

INSERT INTO `Permission` (`id`, `slug`, `name`, `controller`, `action`, `updated`, `createdBy`, `updatedBy`, `created`) VALUES
(1, 'post', 'post', 'post', 'add', NULL, NULL, NULL, '2024-11-25 13:52:24.000'),
(2, 'post', 'post', 'post', 'edit', NULL, NULL, NULL, '2024-11-25 13:54:58.000'),
(3, 'post', 'post', 'post', 'delete', NULL, NULL, NULL, '2024-11-25 13:54:58.000'),
(4, 'post', 'post', 'post', 'view', NULL, NULL, NULL, '2024-11-25 13:54:58.000'),
(5, 'setting', 'setting', 'setting', 'add', NULL, NULL, NULL, '2024-11-25 13:52:24.000'),
(6, 'setting', 'setting', 'setting', 'edit', NULL, NULL, NULL, '2024-11-25 13:54:58.000'),
(7, 'setting', 'setting', 'setting', 'delete', NULL, NULL, NULL, '2024-11-25 13:54:58.000'),
(8, 'setting', 'setting', 'setting', 'view', NULL, NULL, NULL, '2024-11-25 13:54:58.000');

-- --------------------------------------------------------

--
-- Table structure for table `Role`
--

DROP TABLE IF EXISTS `Role`;
CREATE TABLE `Role` (
  `id` int NOT NULL,
  `slug` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updated` datetime(3) DEFAULT NULL,
  `createdBy` int DEFAULT NULL,
  `updatedBy` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `Role`
--

INSERT INTO `Role` (`id`, `slug`, `name`, `created`, `updated`, `createdBy`, `updatedBy`) VALUES
(1, 'admin', 'Admin', '2024-11-25 15:41:03.000', NULL, NULL, NULL),
(2, 'sale', 'Sale', '2024-11-25 15:41:03.000', NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `RolePermission`
--

DROP TABLE IF EXISTS `RolePermission`;
CREATE TABLE `RolePermission` (
  `id` int NOT NULL,
  `roleId` int NOT NULL,
  `permissionId` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `RolePermission`
--

INSERT INTO `RolePermission` (`id`, `roleId`, `permissionId`) VALUES
(2, 1, 1),
(3, 1, 2),
(4, 1, 3),
(5, 1, 4),
(6, 2, 5),
(7, 2, 6),
(8, 2, 7),
(9, 2, 8);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Administrator`
--
ALTER TABLE `Administrator`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `Administrator_email_key` (`email`);

--
-- Indexes for table `AdministratorRole`
--
ALTER TABLE `AdministratorRole`
  ADD PRIMARY KEY (`id`),
  ADD KEY `AdministratorRole_administratorId_fkey` (`administratorId`),
  ADD KEY `AdministratorRole_roleId_fkey` (`roleId`);

--
-- Indexes for table `Permission`
--
ALTER TABLE `Permission`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Role`
--
ALTER TABLE `Role`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `RolePermission`
--
ALTER TABLE `RolePermission`
  ADD PRIMARY KEY (`id`),
  ADD KEY `RolePermission_roleId_fkey` (`roleId`),
  ADD KEY `RolePermission_permissionId_fkey` (`permissionId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Administrator`
--
ALTER TABLE `Administrator`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `AdministratorRole`
--
ALTER TABLE `AdministratorRole`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `Permission`
--
ALTER TABLE `Permission`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `Role`
--
ALTER TABLE `Role`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `RolePermission`
--
ALTER TABLE `RolePermission`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `AdministratorRole`
--
ALTER TABLE `AdministratorRole`
  ADD CONSTRAINT `AdministratorRole_administratorId_fkey` FOREIGN KEY (`administratorId`) REFERENCES `Administrator` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  ADD CONSTRAINT `AdministratorRole_roleId_fkey` FOREIGN KEY (`roleId`) REFERENCES `Role` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

--
-- Constraints for table `RolePermission`
--
ALTER TABLE `RolePermission`
  ADD CONSTRAINT `RolePermission_permissionId_fkey` FOREIGN KEY (`permissionId`) REFERENCES `Permission` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  ADD CONSTRAINT `RolePermission_roleId_fkey` FOREIGN KEY (`roleId`) REFERENCES `Role` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
COMMIT;
