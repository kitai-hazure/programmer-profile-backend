import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { AuthenticationService } from './authentication.service';
import { SigninInput, SignupInput } from '../../src/graphql.types';

@Resolver('Authentication')
export class AuthenticationResolver {
  constructor(private readonly authenticationService: AuthenticationService) {}

  @Mutation('signup')
  async signup(@Args('input') input: SignupInput) {
    return await this.authenticationService.signup(input);
  }

  @Mutation('signin')
  async signin(@Args('input') input: SigninInput) {
    return await this.authenticationService.signin(input);
  }
}
