CREATE TABLE [dbo].[DriversTable] (
    [Id]         INT          IDENTITY (1, 1) NOT NULL,
    [licenseNum] VARCHAR(50) NULL,
    [fullName]   NCHAR (50)  NULL,
    [phoneNum]   VARCHAR(50) NULL,
    [dateBegin]  DATE         NULL,
    [dateCheck]  DATE         NULL,
    PRIMARY KEY CLUSTERED ([Id] ASC)
);

