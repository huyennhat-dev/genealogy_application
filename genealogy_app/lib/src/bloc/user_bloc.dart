import 'package:flutter_bloc/flutter_bloc.dart';

class UserState {
  final bool? isLoading;

  UserState({this.isLoading});

  UserState copyWith({bool? isLoading}) {
    return UserState(isLoading: isLoading ?? this.isLoading);
  }
}

abstract class UserEvent {}

class LogoutEvent extends UserEvent {}

class UserBloc extends Bloc<UserEvent, UserState> {
  UserBloc() : super(UserState()) {}
}
