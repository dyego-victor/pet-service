import { IsString, Matches, MaxLength, MinLength } from 'class-validator';

export class CredentialsDTO {
  @IsString()
  @MinLength(3)
  @MaxLength(30)
  username: string;

  @IsString()
  @MinLength(8)
  @MaxLength(16)
  @Matches(/^(?=.*\d)(?=.*[A-Z])[0-9a-zA-Z$*&@#]{8,}$/, {
    message: 'Password muito fraco',
  })
  password: string;
}
