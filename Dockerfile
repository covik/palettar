# syntax=docker/dockerfile:1

FROM node:22.9.0-bookworm-slim@sha256:6e6df5c992a4b2ca100d9f99f2fff6e1bc7a978c60c39630a2390adbbc7b332b AS base
RUN unlink /usr/local/bin/npm \
    && apt-get update \
    && apt-get --no-install-recommends install -y \
        ca-certificates \
        curl \
        git \
        gnupg2 \
        openssh-client \
        sudo \
    && rm -rf /var/lib/apt/lists/* \
    && apt-get clean \
    && corepack enable

FROM base AS dev
ARG USERNAME=developer
ARG USER_UID=1000
ARG USER_GID=$USER_UID
RUN deluser --remove-home node \
    && groupadd --gid $USER_GID $USERNAME \
    && useradd --uid $USER_UID --gid $USER_GID --create-home $USERNAME --shell /bin/bash \
    && echo "$USERNAME ALL=(ALL) NOPASSWD:ALL" > /etc/sudoers.d/$USERNAME \
    && chmod 0440 /etc/sudoers.d/$USERNAME \
    && mkdir -p /home/$USERNAME/.cache/JetBrains/RemoteDev/dist \
    && chown -R $USERNAME:$USERNAME /home/$USERNAME
USER $USERNAME
RUN git config --global commit.gpgsign true
