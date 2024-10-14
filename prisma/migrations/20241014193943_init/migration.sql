BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[Student] (
    [id] NVARCHAR(1000) NOT NULL,
    [username] NVARCHAR(1000) NOT NULL,
    [name] NVARCHAR(1000) NOT NULL,
    [printBalance] INT NOT NULL,
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [Student_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2 NOT NULL,
    CONSTRAINT [Student_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [Student_username_key] UNIQUE NONCLUSTERED ([username])
);

-- CreateTable
CREATE TABLE [dbo].[Printer] (
    [id] NVARCHAR(1000) NOT NULL,
    [brand] NVARCHAR(1000) NOT NULL,
    [model] NVARCHAR(1000) NOT NULL,
    [description] NVARCHAR(1000) NOT NULL,
    [locationId] NVARCHAR(1000) NOT NULL,
    [enabled] BIT NOT NULL CONSTRAINT [Printer_enabled_df] DEFAULT 1,
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [Printer_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2 NOT NULL,
    CONSTRAINT [Printer_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[Location] (
    [id] NVARCHAR(1000) NOT NULL,
    [campusName] NVARCHAR(1000) NOT NULL,
    [buildingName] NVARCHAR(1000) NOT NULL,
    [roomNumber] NVARCHAR(1000) NOT NULL,
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [Location_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2 NOT NULL,
    CONSTRAINT [Location_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[PrintingLog] (
    [id] NVARCHAR(1000) NOT NULL,
    [studentId] NVARCHAR(1000) NOT NULL,
    [printerId] NVARCHAR(1000) NOT NULL,
    [fileName] NVARCHAR(1000) NOT NULL,
    [startTime] DATETIME2 NOT NULL,
    [endTime] DATETIME2 NOT NULL,
    [pageSize] NVARCHAR(1000) NOT NULL,
    [numPages] INT NOT NULL,
    [isDoubleSided] BIT NOT NULL,
    [copies] INT NOT NULL,
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [PrintingLog_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2 NOT NULL,
    CONSTRAINT [PrintingLog_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[SPSO] (
    [id] NVARCHAR(1000) NOT NULL,
    [email] NVARCHAR(1000) NOT NULL,
    [name] NVARCHAR(1000) NOT NULL,
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [SPSO_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2 NOT NULL,
    CONSTRAINT [SPSO_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [SPSO_email_key] UNIQUE NONCLUSTERED ([email])
);

-- CreateTable
CREATE TABLE [dbo].[Config] (
    [id] NVARCHAR(1000) NOT NULL,
    [defaultPageBalance] INT NOT NULL,
    [semesterStartDate] DATETIME2 NOT NULL,
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [Config_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2 NOT NULL,
    CONSTRAINT [Config_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[FileType] (
    [id] NVARCHAR(1000) NOT NULL,
    [type] NVARCHAR(1000) NOT NULL,
    [configId] NVARCHAR(1000) NOT NULL,
    [createdAt] DATETIME2 NOT NULL CONSTRAINT [FileType_createdAt_df] DEFAULT CURRENT_TIMESTAMP,
    [updatedAt] DATETIME2 NOT NULL,
    CONSTRAINT [FileType_pkey] PRIMARY KEY CLUSTERED ([id]),
    CONSTRAINT [FileType_type_key] UNIQUE NONCLUSTERED ([type])
);

-- AddForeignKey
ALTER TABLE [dbo].[Printer] ADD CONSTRAINT [Printer_locationId_fkey] FOREIGN KEY ([locationId]) REFERENCES [dbo].[Location]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[PrintingLog] ADD CONSTRAINT [PrintingLog_studentId_fkey] FOREIGN KEY ([studentId]) REFERENCES [dbo].[Student]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[PrintingLog] ADD CONSTRAINT [PrintingLog_printerId_fkey] FOREIGN KEY ([printerId]) REFERENCES [dbo].[Printer]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[FileType] ADD CONSTRAINT [FileType_configId_fkey] FOREIGN KEY ([configId]) REFERENCES [dbo].[Config]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
